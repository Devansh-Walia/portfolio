import sharp from "sharp";
import { promises as fs } from "fs";
import { join } from "path";

async function generateOGImage(publicDir) {
  // Create the base OG image with gradient background and text
  const ogBase = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FF6647;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="black"/>
      <rect x="0" y="0" width="1200" height="630" fill="url(#grad1)" opacity="0.1"/>
      <text x="600" y="315" text-anchor="middle" font-family="system-ui" font-size="72" font-weight="bold" fill="white">Devansh Walia</text>
      <text x="600" y="395" text-anchor="middle" font-family="system-ui" font-size="36" fill="#9CA3AF">Software Engineer</text>
      <text x="600" y="455" text-anchor="middle" font-family="system-ui" font-size="24" fill="#9CA3AF">React • Next.js • TypeScript • Nest.js</text>
    </svg>
  `);

  try {
    const profilePath = join(process.cwd(), "public/images/profile.jpeg");
    const profileExists = await fs
      .access(profilePath)
      .then(() => true)
      .catch(() => false);

    if (profileExists) {
      // Create circular profile image
      const profileImage = await sharp(profilePath)
        .resize(400, 400, { fit: "cover" })
        .toBuffer();

      const circleMask = await sharp({
        create: {
          width: 400,
          height: 400,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 1 },
        },
      })
        .composite([
          {
            input: Buffer.from(`
          <svg width="400" height="400">
            <circle cx="200" cy="200" r="200" fill="white"/>
          </svg>
        `),
            blend: "dest-in",
          },
        ])
        .toBuffer();

      const circularProfile = await sharp(profileImage)
        .composite([
          {
            input: circleMask,
            blend: "dest-in",
          },
        ])
        .toBuffer();

      // Add profile picture to OG image
      await sharp(ogBase)
        .composite([
          {
            input: circularProfile,
            top: 115, // Adjusted for better vertical alignment
            left: 400,
          },
        ])
        .toFile(join(publicDir, "og-image.png"));
    } else {
      // If no profile picture, just use the base OG image
      await sharp(ogBase).toFile(join(publicDir, "og-image.png"));
      console.log(
        "⚠️ Profile image not found at public/images/profile.jpeg, generating OG image without profile picture"
      );
    }
  } catch (error) {
    console.error("Error generating OG image:", error);
    // Fallback to base OG image
    await sharp(ogBase).toFile(join(publicDir, "og-image.png"));
  }
}

generateOGImage(join(process.cwd(), "public")).catch(console.error);

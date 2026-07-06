from PIL import Image

# Open the logo image
img = Image.open("/home/ubuntu/mori_sobhani_profile/client/public/logo.png")

# Resize for favicon (standard 32x32)
favicon = img.resize((32, 32), Image.Resampling.LANCZOS)

# Save as favicon.ico
favicon.save("/home/ubuntu/mori_sobhani_profile/client/public/favicon.ico", format="ICO")

print("Favicon generated successfully.")

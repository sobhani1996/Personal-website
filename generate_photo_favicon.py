from PIL import Image, ImageDraw

def create_circular_favicon(input_path, output_path, size=(64, 64)):
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Calculate cropping box to make it square (center crop)
        width, height = img.size
        new_size = min(width, height)
        left = (width - new_size) / 2
        top = (height - new_size) / 2
        right = (width + new_size) / 2
        bottom = (height + new_size) / 2
        
        img = img.crop((left, top, right, bottom))
        img = img.resize(size, Image.Resampling.LANCZOS)
        
        # Create circular mask
        mask = Image.new('L', size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + size, fill=255)
        
        # Apply mask
        output = Image.new('RGBA', size, (0, 0, 0, 0))
        output.paste(img, (0, 0), mask=mask)
        
        output.save(output_path)
        print(f"Favicon generated at {output_path}")
        
    except Exception as e:
        print(f"Error generating favicon: {e}")

if __name__ == "__main__":
    create_circular_favicon(
        "/home/ubuntu/mori_sobhani_profile/client/public/images/mori-logo.jpg",
        "/home/ubuntu/mori_sobhani_profile/client/public/favicon.ico"
    )

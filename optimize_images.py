from PIL import Image
import os

def convert_to_webp(source_path, dest_path, quality=80):
    try:
        with Image.open(source_path) as img:
            img.save(dest_path, 'WEBP', quality=quality)
            print(f"Successfully converted {source_path} to {dest_path}")
            
            # Compare sizes
            original_size = os.path.getsize(source_path)
            new_size = os.path.getsize(dest_path)
            print(f"Original size: {original_size/1024:.2f} KB")
            print(f"New size: {new_size/1024:.2f} KB")
            print(f"Reduction: {((original_size - new_size) / original_size) * 100:.2f}%")
    except Exception as e:
        print(f"Error converting image: {e}")

if __name__ == "__main__":
    source = "/home/ubuntu/mori_sobhani_profile/client/public/images/hero-portrait.jpg"
    dest = "/home/ubuntu/mori_sobhani_profile/client/public/images/hero-portrait.webp"
    convert_to_webp(source, dest, quality=75)

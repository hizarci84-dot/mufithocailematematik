import os
import re

directory = r"c:\Users\hizar\OneDrive\Desktop\projeler\TWİTTER VE İNSTAGRAM PAYLAŞIMLARI\Uygulamalar_ve_Animasyonlar\8_Sinif"

# The new CSS for .expl-text
new_css = ".expl-text { background:rgba(139,92,246,0.15); border:1px solid rgba(139,92,246,0.3); padding:15px 25px; border-radius:12px; font-size:1.25rem; color:white; font-weight:800; text-align:center; width:100%; max-width:800px; margin-bottom:15px; transition:0.5s; }"

modified_files = []

for filename in os.listdir(directory):
    if filename.endswith("Animasyon.html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        
        original_content = content
        
        # 1. Update CSS
        content = re.sub(r'\.expl-text\s*\{[^}]*\}', new_css, content)
        
        # 2. Extract and move the HTML div
        # Find the expl-text div
        match = re.search(r'([ \t]*<div class="expl-text" id="explText">.*?</div>\n?)', content, flags=re.DOTALL)
        if match:
            div_block = match.group(1)
            # Remove it from the current position
            content = content.replace(div_block, '')
            
            # Find the start of canvas-area and insert it just before
            canvas_area_marker = '<div class="canvas-area">'
            if canvas_area_marker in content:
                # Format properly with indentation
                replacement = div_block.strip() + '\n    ' + canvas_area_marker
                content = content.replace(canvas_area_marker, replacement)
        
        if content != original_content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            modified_files.append(filename)

print("Fix applied to:", len(modified_files), "files")
for f in modified_files:
    print(f)

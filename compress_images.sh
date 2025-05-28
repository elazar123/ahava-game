#!/bin/bash

# יצירת תיקיית היעד אם היא לא קיימת
mkdir -p compressed_images

# דחיסת תמונות מהתיקייה הראשית
echo "דוחס תמונות מתיקיית 'קלפי שיח ספר אהבה'..."
find "קלפי שיח ספר אהבה" -name "*.png" | while read file; do
  # יוצר את שם הקובץ החדש
  newfile="compressed_images/$(basename "$file")"
  
  # דוחס את התמונה לגודל של 800 פיקסלים ברוחב, שומר על יחס צד
  sips --resampleWidth 800 "$file" --out "$newfile"
  
  echo "דחוס: $file -> $newfile"
done

echo "הדחיסה הסתיימה בהצלחה!" 
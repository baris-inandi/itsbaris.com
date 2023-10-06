cd public/coverimgs
for file in *; do
  echo "$file"
  convert "$file" -quality 100% -define webp:lossless=true -set filename:basename "%[basename]" \
    "%[filename:basename]".webp
done

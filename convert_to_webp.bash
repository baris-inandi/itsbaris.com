declare -a arr=("public/cards" "public/face" "public/readassets")
wd=$(pwd)

for i in "${arr[@]}"; do
  echo "IN DIRECTORY: $i"
  cd $wd
  cd $i
  for file in *; do
    echo "$file"
    convert "$file" -quality 100% -define webp:lossless=true -set filename:basename "%[basename]" \
      "%[filename:basename]".webp
  done
done

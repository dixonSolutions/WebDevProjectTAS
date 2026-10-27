#!/usr/bin/env bash
# Zips the whole project into <project-name>.zip in the project root.
# The zip leaves out this script and the zip file itself.
# Usage: ./zip-project.sh            (everything, including .git)
#        ./zip-project.sh --no-git   (also leave out the .git folder)
set -euo pipefail

script_path="$(realpath "${BASH_SOURCE[0]}")"
project_dir="$(dirname "$script_path")"
project_name="$(basename "$project_dir")"
script_name="$(basename "$script_path")"
zip_name="$project_name.zip"

cd "$project_dir"
rm -f "$zip_name"

excludes=("$script_name" "$zip_name")
if [[ "${1:-}" == "--no-git" ]]; then
  excludes+=(".git/*")
fi

zip -r -q "$zip_name" . -x "${excludes[@]}"

echo "Created $project_dir/$zip_name"
echo "Download it: right-click $zip_name in the VS Code Explorer -> Download..."

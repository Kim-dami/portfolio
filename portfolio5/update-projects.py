from pathlib import Path
import json
import re

root = Path(__file__).resolve().parent
source = json.loads((root / "projects.json").read_text(encoding="utf-8"))
data = json.dumps(source, ensure_ascii=False, indent=2).replace("</", "<\\/")
page = root / "index.html"
html = page.read_text(encoding="utf-8")
pattern = r'(<script type="application/json" id="portfolio-project-data">).*?(</script>)'
html, count = re.subn(pattern, lambda match: match[1] + "\n" + data + "\n" + match[2], html, flags=re.S)
if count != 1:
    raise RuntimeError("Expected one portfolio-project-data script element")
page.write_text(html, encoding="utf-8")
print("Updated project popup data in index.html")

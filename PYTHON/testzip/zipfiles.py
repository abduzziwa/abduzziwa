from pathlib import Path
from zipfile import ZipFile

# OPTION 1
# # zip = ZipFile('test.zip', 'w')
# for path in Path('testzip').rglob('*.*'):
#     zip.write(path)
# zip.close()

# OPTION 2: RECOMENDED
with ZipFile('testzip.zip', 'w') as zip:
    for path in Path('testzip').rglob('*.*'):
        zip.write(path)

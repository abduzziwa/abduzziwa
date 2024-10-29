from pathlib import Path
from zipfile import ZipFile

# WRITING ZIP FILES
# OPTION 1
# # zip = ZipFile('test.zip', 'w')
# for path in Path('testzip').rglob('*.*'):
#     zip.write(path)
# zip.close()

# OPTION 2: RECOMENDED
# with ZipFile('testzip.zip', 'w') as zip:
#     for path in Path('testzip').rglob('*.*'):
#         zip.write(path)

# READING ZIP FILES
# OPTION 1
with ZipFile('testzip.zip', 'r') as zip:
    print(zip.namelist())
    info = zip.getinfo('testzip/zipfiles.py')
    print(info)
    print(info.file_size)
    print(info.compress_size)
    zip.extractall('extracted')

print(Path.iterdir("extracted"))


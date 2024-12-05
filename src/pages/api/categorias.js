import fs from 'fs';
import path from 'path';

export default function categorias(req, res) {
  const directoryPath = './collections';

  try {
    const directories = fs.readdirSync(directoryPath)
      .filter((dirent) => fs.statSync(path.join(directoryPath, dirent)).isDirectory())
      .map((dirent) => dirent);

    res.status(200).json({ directories });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


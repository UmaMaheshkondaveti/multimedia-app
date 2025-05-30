const cloudinary = require('../config/cloudinary');
const Media = require('../models/Media');

exports.upload = async (req, res) => {
  const file = req.file;
  const result = await cloudinary.uploader.upload(file.path, { resource_type: "auto" });

  const media = await Media.create({
    filename: file.originalname,
    tags: req.body.tags?.split(',') || [],
    url: result.secure_url,
    filetype: file.mimetype,
    size: file.size,
    user: req.user.id,
  });

  res.status(201).json(media);
};

exports.search = async (req, res) => {
  const query = req.query.query;
  const results = await Media.find({
    $or: [
      { filename: { $regex: query, $options: 'i' } },
      { tags: { $in: [query] } },
    ]
  }).sort({ views: -1, createdAt: -1 });
  res.json(results);
};

exports.viewFile = async (req, res) => {
  const media = await Media.findById(req.params.id);
  if (!media) return res.status(404).json({ error: 'Not found' });

  media.views += 1;
  await media.save();
  res.json(media);
};

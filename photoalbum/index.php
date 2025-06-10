<?php
$images = array_values(array_filter(scandir('images'), function($file) {
    return preg_match('/\\.(jpg|jpeg|png)$/i', $file);
}));

$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$imagesPerPage = 6;
$totalPages = ceil(count($images) / $imagesPerPage);
$startIndex = ($page - 1) * $imagesPerPage;
$imagesToShow = array_slice($images, $startIndex, $imagesPerPage);

// Upload handler
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
    $uploadDir = 'images/';
    $file = $_FILES['image'];
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $allowed = ['jpg', 'jpeg', 'png'];
    if (in_array(strtolower($ext), $allowed) && $file['size'] <= 5 * 1024 * 1024) {
        move_uploaded_file($file['tmp_name'], $uploadDir . time() . "." . $ext);
        header("Location: index.php?page=$page");
        exit;
    }
}

// Delete handler
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete'])) {
    $fileToDelete = 'images/' . basename($_POST['delete']);
    if (file_exists($fileToDelete)) {
        unlink($fileToDelete);
        header("Location: index.php?page=$page");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Photo Album</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">

    <div class="header">
        <div class="user-profile">
            <img src="Profile.jpg" alt="User" class="profile-pic">
        </div>
    </div>
<form method="POST" enctype="multipart/form-data" class="upload-form">
    <label for="image-upload" class="upload-label">
        <input type="file" name="image" id="image-upload" accept="image/*" required>
        <span>Select Image</span>
    </label>
    <button type="submit" class="upload-button">Upload</button>
    <div class="preview"></div>
</form>

<div class="gallery">
    <div class="column left">
        <?php for ($i = 0; $i < count($imagesToShow); $i++): ?>
            <?php if ($i % 2 === 0): ?>
                <div class="image-box">
                    <img src="images/<?= htmlspecialchars($imagesToShow[$i]) ?>" alt="Uploaded Image">
                    <form method="POST" onsubmit="return confirm('Delete this image?');">
                        <input type="hidden" name="delete" value="<?= htmlspecialchars($imagesToShow[$i]) ?>">
                        <button type="submit" class="delete-btn" title="Delete">
                            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-2 14H7L5 6" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                                <path d="M9 6V4h6v2" />
                            </svg>
                        </button>
                    </form>
                </div>
            <?php endif; ?>
        <?php endfor; ?>
    </div>

    <div class="column right">
        <?php for ($i = 0; $i < count($imagesToShow); $i++): ?>
            <?php if ($i % 2 === 1):  ?>
                <div class="image-box">
                    <img src="images/<?= htmlspecialchars($imagesToShow[$i]) ?>" alt="Uploaded Image">
                    <form method="POST" onsubmit="return confirm('Delete this image?');">
                        <input type="hidden" name="delete" value="<?= htmlspecialchars($imagesToShow[$i]) ?>">
                        <button type="submit" class="delete-btn" title="Delete">
                            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6l-2 14H7L5 6" />
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                                <path d="M9 6V4h6v2" />
                            </svg>
                        </button>
                    </form>
                </div>
            <?php endif; ?>
        <?php endfor; ?>
    </div>
</div>


    <div class="pagination">
        <?php if ($page > 1): ?>
            <a href="?page=<?= $page - 1 ?>">&laquo; Previous</a>
        <?php endif; ?>
        <span>Page <?= $page ?> of <?= $totalPages ?></span>
        <?php if ($page < $totalPages): ?>
            <a href="?page=<?= $page + 1 ?>">Next &raquo;</a>
        <?php endif; ?>
    </div>
</div>
<script src="script.js"></script>
</body>
</html>

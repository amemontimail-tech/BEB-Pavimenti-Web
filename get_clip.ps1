Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$img = [System.Windows.Forms.Clipboard]::GetImage()
if ($img) {
    $img.Save("c:\Users\paola.berardo\.antigravity\sevilmont\BEB-Pavimenti-Web\public\prodotti\parquet-legno.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    echo "Image saved from clipboard!"
} else {
    echo "No image in clipboard."
}

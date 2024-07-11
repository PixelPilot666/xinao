import os
import cv2
from tqdm import tqdm

img_dir = r'D:\desktop\xinao_f\sample_img'
save_dir = 'D:/desktop/xinao_f/sample_img_size/'

for img_name in tqdm(os.listdir(img_dir)):
    img = cv2.imread(os.path.join(img_dir, img_name))
    img_r = cv2.resize(img, (150, 150))
    cv2.imwrite(save_dir+img_name, img_r)
import cv2

img = cv2.imread('./Image/标志.jpg')

print('Original Dimensions : ',img.shape)

resized = cv2.resize(img,(612,612))

print('Resized Dimensions : ',resized.shape)

cv2.imwrite("标志.jpg",resized)
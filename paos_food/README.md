# PaosFood

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

# Deployment Front-End on Pythonanywhere
To deploy the Front-End in the network, the following steps were followed:
 

1. Run a CMD console inside the project folder. Writing the command “ng build –configuration=production” what it does is builds the project in production mode.


2. Once the construction process is finished, it will add to our project a folder with the name "dist" that contains our compiled project and ready for deployment. This folder has to be compressed into a file with a .zip extension.


3. It is necessary to create an account at https://www.pythonanywhere.com/. By having created the account we will have the functionalities. We access the “Files” option in the upper right section.

    ![img1](T8/img/img1.jpg)

4. In the upper right section you can see a directory path so we will have to navigate to the root folder "/".

    ![img2](T8/img/img2.jpg)

5. We observe that there are 3 directories. We have to access the “var/” folder and then the “www/” folder

    ![img3](T8/img/img3.jpg)

6. The compressed file must be uploaded by choosing the “Upload a file” option.


7. In this step, we must open a console and unzip our .zip extension tablet through the unzip dist command. This will leave our application folder inside Python anywhere.

   ![img4](T8/img/img4.jpg)

8. Once the decompression process is finished, we go to the upper right part to the Web option. Here we go to the Static Files section. Here we are going to select on URL to add a new route. We write the path "/" and in the Directory option we write the path where we unzip our file. In this case it is “var/www/dist/paos_food”

    ![img5](T8/img/img5.jpg)


9. Once the routes have been entered, we go to the beginning of the page and select Reload. This will take about a minute.

    ![img6](T8/img/img6.jpg)

10. We select the address that has been assigned to us and we will be able to see our app deployed.

![img7](T8/img/img7.png)

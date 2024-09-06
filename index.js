console.log("Welcome to hello world program")
// docker build -t hello-docker .
// docker pull username/dockerImage
// doker run ubantu
// docker ps     > to get all running container
// docker ps -a    > to all container
// docker run -it ubuntu
// - echo hello
// - echo $0       > give us currnet running directory
// - whoami
// - history    > give list of all previous command
// - !3     > will direclty load the command
// - apt   > apt is the packgage manage
// - apt-get
// - apt list   > show all the packages
// - apt update
// - apt install nano      > to install packages
// - apt remove nano      > to remove the package
// File System
// - pwd  > print working directory
// - ls
// - ls -1 or ls -l
// - cd direclty name
// - cd ../..
// - mkdir test
// - move test docker   > Here we have rename the test file to docker
// - touch hello.txt
// - rm hello.txt
// - touch file1.txt flle2.txt
// - rm -r dirName
// - nano file.txt          > used to edit the file and save by ctrl + x and press y and enter
// - cat file.txt      > to see the content to file
// - more file.txt      > read a long file , use space to go to next page, and enter to go next line
// - apt install less       > use q to exit the file
// - less file.txt           > behave same as more, allow you move up and down
// - head -n 5 file.txt        > see the first 5 line
// - tail -n 5 file.txt       > see the last 5 five line of file
// - cat file.txt > file2.txt  > create a new file have all content of file.txt
// - cat file.txt file2.txt    > read both at same time
// - cat file.txt file2.txt > combine.txt       > will create new file
// - echo just want to add one line > newfile.txt    > create new file with following text
// grep command -> globle regular expression print
// - grep hello file.txt      > find hello in given file
// - grep hello -i file.txt   > now remove the case sensetivity
// - grep hello -i file*       > serch in all file, name start with file
// - grep hello -i file1.txt file2.txt      > search in multiple files
// - grep hello -i -r hello .    > searh in present and all it's sub directory
// - grep hello -ir long .       > will work as same as above
// - find          > retun all file in a directory
// - ls -a       > find hidden files
// - find /etc   > find all file in a specific dir
// - find -type d -name "f*"   > find files in the current directory start with f"
// - find -type f -name "f*"   > find all file start with f  case sensetive
// - find -type f -iname "f*"  > file all file start with f case insensitive
// - find -type f -name "*.txt"   > get all the file end with .txt extention
// ### Chaning Commands
// - mkdir test; cd test; echo done   > running muliple commands in one go
// - NOTE -  if execute same command once again it give error and then execute next two command
// - mkdir test && cd test && echo done    > this is conditional statement.
// - mkdir test || echo this directory already exist    > if first not execute the 2nd execute
// - ls /bin | more        > this is pipe, what come from command one goes as input to 2nd
// - ls /bin | head -n 5
// - mkdir test;\ cd test;\ echo done         > how to change into multiple line, we can break by back stash
// ### Enviroment variable
// - printenv     > to print enviroment variable
// - printenv PATH  > Print specific env variable
// - echo $PATH
// - export DB_URL=http//:mongodb/        > set new env variable
// - echo $DB_URL
// NOTE env varible automatically deleted in next session to persist
// - docker run -i edbf             > we can also run docker image by its initials of imageid
// - exit                         > exit command to get our of ubuntu terminal
// - cd ~; ls -a                 > go to home dir then list all file here you get .bashrc file, hold all env var
// - echo DB_USER=vikash >> .bashrc          > To store the variable permanentalty, but can access with next session
// NOTE is >> sign to append else if used >, it will overide all other var,
// - cat .bashrc         >> read the file
// docker ps -a          >> to see all docker continer
// docker start -i 7401
// - echo $DB_USER
// - source ~/.bashrc         >> to the data in the same session, which we had saved with bashrc, we have to plugin the current bashrc by this command
// ### Process  ->  a process is the instance of running program
// - sleep 3      -> make terminal inactive for 3 sec then come back
// - sleep 100 &      -> create a sleep process for 100 sec in background
// - kill 16            ->  kill PID number to kill an existing process, so process with pid 16 will be terminated
// ### user management
// - useradd    > add user
// - usermod    > modify user
// - userdel    > delete user
// - useradd -m john          > create a new user jon with a home directory
// - cat /etc/passwd          > to see the user direcotry : john:x:1001:1001::/home/john:/bin/sh   >> userName:passwordStoredSomeWhere:userID:GrupID::userDir:shallProgramUsed
// - usermod -s /bin/bash john        > modify shall to bash
// - cat /etc/shadow               > hold all the password in encrypted format, only access by root user
// - docker exec -it 7401f9baec4f bash        > to run the terminal with bash with # sign, reperesent root user
// - docker exec -it -u john 7401f9baec4f bash     > run the bash terminal with john as an user with a $ sign, represent it's a command user
// - cd ~; pwd            > show user root directory
// - userdel
// - adduser bob              > is an more intrative way to creat user, give you multiple step
// - userdel john             > used to delete the john user
// ### Managing group       > all user in a group holds same level of permission
// - groupadd
// - groupmod
// - groupdel
// NOTE: Every linux user have one primary ground and 0 or more suplimentry group, to adding primary use -g and to supplimptry use -G
// NOTE: Primary group automaticaly created at the time of creating a user
// - groupadd developer                 > add new developer group
// - usermod -G developer john           > add developer group to join as suplimentry
// - cat /etc/passwd | grep john         > add user
// - groups john                        > to see all groups of john
// - grep john /etc/passwd              > another way to find join info in passwd
// ### file permission
// - cd home; echo hello world > deploy.sh          > move to home and add text to deploy.sh
// - ls -l            > give infomation about file and directory read write and execute permission:  drwxr-x--- its directory, -rw-r--r-- its file
// NOTE: drwxr-x--- or -rw-r--r--   d for dir and - stand for file. next 3 permission for user who create this, next 3 for associated group, next 3 for anyone
// - ./deploy.sh       > get   bash: ./deploy.sh: Permission denied,  becuase not have execute permission
// - chmod u                > change permission for user
// - chmod g                > change permission for group
// - chmod o                > change permission for others
// - chmod u+x deploy.sh          > giving user executable permission for deploy.sh file
// -  ls -l                      > now we check user execute permission it allowed we can execute file by ./deploy.sh command
// - chmod o+r+w+x deploy.sh             > giving other user john to permission for read write and execute
// - chmod og+w+x-r  deploy.sh deploy1.sh   > giving both other and group permission to write and execute but remove read permission
// - chmod og+w+x-r "*.sh"
// Docker command: FROM, WORKDIR, COPY, ADD, RUN, ENV, EXPOSE, USER, CMD, ENTRYPOINT
// In your app which you want to start with docker >> create Dockerfile >> add FROM and specify enviroment, example FROM node:alpine
// docker build -t name-of-your-app .       >> go into current directory of project and run this command build a image
// docker run -it name-of-image bash         >> in intractive mode with bash
// docker run -it name-of-image sh         >> in intractive mode with shell
// Use ADD instead of copy if have to copy someting form http url OR some zip file to current directory
// COPY package.json ./app
// COPY package*.json  ./app/            > anything start with package and end with .json
// COPY package.json file.txt  ./app/    > copy multiple files
// COPY . ./app/                         > copy everything from current to app directory
// COPY . .                              > if already defined working directory
// 


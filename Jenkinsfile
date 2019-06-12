pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout'
            }
        }
        stage('npm install dependencies') {
            steps {
                echo 'Install dependencies'
                nodejs('Node 10.15.0 LTS') {
                    sh 'npm install'
              }
            }
        }
        stage('Test') {
                    steps {
                        echo 'Test cases'
                        nodejs('Node 10.15.0 LTS') {
                            sh 'npm run-script test'
                      }
                    }
                }

        stage('Build NPM') {
            steps {
                echo 'Build NPM'
                nodejs('Node 10.15.0 LTS') {
                    sh 'npm run-script build'
              }
            }
        }



        stage('Build Docker Image') {
            steps {
                echo 'Build Docker Image'
                sh 'docker build --no-cache -t leon4uk/botmasterzzz-frontend:1.0.0 .'
            }
        }

        stage('Push Docker image') {
            steps {
                echo 'Push Docker image'
                withCredentials([string(credentialsId: 'dockerHubPwd', variable: 'dockerHubPwd')]) {
                   sh "docker login -u leon4uk -p ${dockerHubPwd}"
                }
                sh 'docker push leon4uk/botmasterzzz-frontend:1.0.0'
                sh 'docker rmi  leon4uk/botmasterzzz-frontend:1.0.0'
            }
        }
        stage('Deploy') {
            steps {
                echo '## Deploy locally ##'
                withCredentials([string(credentialsId: 'dockerHubPwd', variable: 'dockerHubPwd')]) {
                   sh "docker login -u leon4uk -p ${dockerHubPwd}"
                }
                sh "docker container ls -a -f name=botmasterzzz-frontend -q | xargs --no-run-if-empty docker container stop"
                sh 'docker container ls -a -f name=botmasterzzz-frontend -q | xargs -r docker container rm'
                //sh "docker images --format '{{.Repository}}' | grep 'botmasterzzz-frontend' | xargs --no-run-if-empty docker rmi"
                sh 'docker run -v /etc/localtime:/etc/localtime --name botmasterzzz-frontend -d -p 127.0.0.1:8066:80 leon4uk/botmasterzzz-frontend:1.0.0'
            }
        }
    }
}

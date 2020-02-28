pipeline{
    agent{
        node{
            label 'master'
        }
    }
    
    
    environment{
        JENKINS_NODE_COOKIE = 'dontkill'
        PORT="${NODE_PORT}"//this port is used by he jenkins script for killing your old api process
        //these should be you env var names on the left
        DBEAVER_USERNAME="${USERNAME}"
        DBEAVER_HOST="${HOST}"
        DEBEAVER_PASSWORD="${PASSWORD}"
        DEBEAVER_DATABASE="${DATABASE}"
    }
    
    stages{
        stage('Preparation') { // for display purposes
            steps {
              // clean the workspace
              cleanWs()
            }
        }

       stage('Download') {
           steps {
              // Download code from a GitHub repository
              git branch: 'master', url: 'https://github.com/1910javareact/project-0-JustinM9six.git'
           }
        }

        stage('NPM Install') {
            steps {
                // go into client-side directory
                // install node modules
                // dir('project-0'){//this is for moving into directories
                    
                // }
                sh 'npm install'
                    
                
            }
        }
        
        stage('Destroy Old Server') {
            steps {
                script {
                    try {
                        // kill any running instances
                        sh "fuser -k ${NODE_PORT}/tcp"
                    } catch (all) {
                        // if it fails that should mean a server wasn't already running
                    }
                }
            }
        }

        // Deploy the application
        stage('Deploy') {
            steps {
                        // deploy the application in the background
                        //nohup means keep running even after I logout
                        //& means run in the background
                        sh 'nohup npm run deploy &'
                        // use the one below instead of the one above if you want the build to never end but see the console outputs of the api
                         //sh 'npm run deploy'
            }
        }

    }
    post {
        always {
            sh "echo 'i always run'"
            
            /* SLACK message example
            
            slackSend channel: '#some-channel',
                color: 'good',
                message: "The Janus server has attempted a build"
                
            */
        }
        
        success {
            sh "echo 'i only run on success'"
        }
        
        unstable {
            sh "echo 'i run when the build is unstable (testing?)'"
        }
        
        failure {
            sh "echo 'i run when things failed'"
        }
        
        changed {
            sh "echo 'i run when there is a successful build after a failed one'"
            sh "echo 'or a failed build after a successful one'"
        }
    }
}
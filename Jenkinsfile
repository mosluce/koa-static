pipeline {
  agent {
    docker {
      image 'node'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''ls -al
npm install
npm test'''
      }
    }
  }
}
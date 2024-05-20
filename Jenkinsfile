pipeline{
  agent any
  tools{
    nodejs "node 20.11.1"
  }

  stages{

    stage("Run Unit Tests"){
      steps{
        bat "npm test"
      }
    }

    stage("Build"){
      steps{
        bat "npm install"
        bat "npm run build"
      }
    }

  }
}
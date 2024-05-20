pipeline{
  agent any
  tools{
    nodejs "node 20.11.1"
  }

  stages{

    stage("Build"){
      steps{
        bat "npm install"
        bat "npm run build"
      }
    }

        stage("Run Unit Tests"){
      steps{
        bat "npm run test"
      }
    }


  }
}
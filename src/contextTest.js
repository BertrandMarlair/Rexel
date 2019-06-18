import React, {Component} from 'react'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      installation: {
        target: null,
        type: {
          residentiel: {
            id: 0,
            target: null,
            name: 'resitent',
            description: 'Si votre client souhaite une borne à domicile.',
            application: [{
              id: 0,
              name: 'Usage privé',
              description: 'Si votre client ne souhaite pas facturer l\'utilisation des bornes.',
            }, {
              id: 1,
              name: 'Voiture de société',
              description: 'Si votre client souhaite facturer sa consommation à son employeur. Un abonnement chez un provider est requis dans ce cas.',
            }]
          },
          enterprise: {
            id: 1,
            target: null,
            name: 'enterprise',
            description: 'Si la borne doit être installée sur un parking d\'une société ou chez un indépendant',
            application: [{
              id: 0,
              name: 'Parking privé',
            }, {
              id: 1,
              name: 'Parking semi public',
              description: 'Si le parking est également accessible aux autres e-conducteurs.',
            }]
          },
          horeca: {
            id: 2,
            target: null,
            name: 'horeca',
            description: 'Si votre client est un hôtel ou un restaurant.',
            application: [{
              id: 0,
              name: 'Parking clientèle (privé)',
              description: 'Si votre client ne souhaite pas facturer l\'utilisation des bornes.',
            }, {
              id: 1,
              name: 'Parking (semi) public',
              description: 'Si le parking donne également accès aux autres e-conducteurs qui ne sont pas clients de l\'entreprise.',
            }]
          }
        }
      },
      bornes: {
        simple: {
          target: null,
          name: 'Simple',
          id: 'simple',
          description: 'Emplacement pour une seule voiture',
          count: [{
            id: 0, 
            number: 1,
          }, {
            id: 1,
            number: 2,
          }, {
            id: 2,
            number: 3,
          }, {
            id: 3,
            number: 4,
          }]
        },
        double: {
          target: null,
          name: 'Double',
          id: 'double',
          description: 'Préférez une borne double pour deux emplacements de parking contigus. Le prix sera moindre et l\'installation plus simple.',
          count: [{
            id: 0,
            number: 1,
          }, {
            id: 1,
            number: 2,
          }, {
            id: 2,
            number: 3,
          }, {
            id: 3,
            number: 4,
          }]
        }
      },
    }
  }

  componentDidMount(){
    axios.get('https://cors.io?https://aws.rexel.be/tools/evc/fr/ajax/get_brands_models?brand=2&model=7').then((response)=> {
      console.log(response)
    }).catch((error)=> {
      console.log(error)
    })
  }

  targetInstall = id => {
    let installation = this.state.installation
    installation.target = id
    this.setState({installation})
  }

  targetApplication = (id, selectId) => {
    let installation = this.state.installation
    installation.type[id].target = selectId
    this.setState({installation})
  }

  targetBorneSimple = id => {
    let bornes = this.state.bornes
    if(bornes.simple.target === id){
      bornes.simple.target = null
      this.setState({bornes})
    }else{
      bornes.simple.target = id
      this.setState({bornes})
    }
  }

  targetBorneDouble = id => {
    let bornes = this.state.bornes
    if(bornes.double.target === id){
      bornes.double.target = null
      this.setState({bornes})
    }else{
      bornes.double.target = id
      this.setState({bornes})
    }
  }

  render(){
    const {installation, bornes} = this.state
    let type = []
    for(let i in installation.type){
      if (installation.type[i].id === installation.target) {
        type = installation.type[i]
      };
    };
    return (
      <div className="App">
        {Object.keys(installation.type).map((context, index) => {
          const install = installation.type[context]
          return (
            <div key={`install${index}`} onClick={() => this.targetInstall(install.id)}>
              <h2>{install.name} {installation.target === install.id && 'targeted'}</h2>
              <h4>{install.description}</h4>
            </div>
          )
        })}
        <hr/>
        {type.application && type.application.map((application, index) => {
          return (
            <div key={`application${index}`} onClick={()=> this.targetApplication(type.name, application.id)}>
              <h3>{application.name} {type.target === application.id && 'targeted'}</h3>
              <h5>{application.description}</h5>
            </div>
          )
        })}
        {bornes.simple.count.map((borne, index)=> {
          return (
            <div key={`borneSimple${index}`} onClick={()=> this.targetBorneSimple(borne.id)}>
              {borne.number} {borne.id === bornes.simple.target && 'targeted'}
            </div>
          )
        })}
        {bornes.double.count.map((borne, index)=> {
          return (
            <div key={`borneDouble${index}`} onClick={()=> this.targetBorneDouble(borne.id)}>
              {borne.number} {borne.id === bornes.double.target && 'targeted'}
            </div>
          )
        })}
        {bornes.simple.target === 0 && bornes.double.target === null &&
          <div>
            target car
          </div>
        }
      </div>
    )
  }
}

export default App

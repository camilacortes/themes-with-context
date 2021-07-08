import React, {Component} from 'react';

const {Provider, Consumer} = React.createContext()


class ThemeContextProvider extends Component{
    state ={
            backgroundColor: "#000",
            textColor: "#fff"
    }
    
    changingTheme =()=>{
        console.log('I have been clicked')
        this.setState(prevState => {
            return {
            backgroundColor: prevState.backgroundColor === "#000" ? "#fff" : "#000",
            textColor : prevState.textColor === "#fff" ? "#000" : "#fff"
            }
        })
    }

    render(){
        return(
           <Provider value={{
               backgroundColor: this.state.backgroundColor,
               textColor: this.state.textColor,
               changingTheme: this.changingTheme
           }}>
               {this.props.children}
           </Provider>
        )      
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer} 

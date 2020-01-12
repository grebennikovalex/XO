import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import  Players from '../players';
import  Board  from '../board';




const screens = {

    Players: {
        screen: Players,
        navigationOptions: {
            title: 'PLAYERS',
           
            headerStyle: {
                backgroundColor: '#c8d6e5',
                
               

            }
            
        }
    },

    Board: {
        screen: Board
    }
        
      

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

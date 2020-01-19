import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import  Players from '../players';
import  Board  from '../board';




const screens = {

    Players: {
        screen: Players,
        navigationOptions: {
            title: 'XO',
            headerTitleAlign: 'center',
                       
            headerStyle: {
                backgroundColor: '#487eb0',
                        
            }
            
        }
    },

    Board: {
        screen: Board
    }
        
      

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

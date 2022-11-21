import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AllChums from '../../pages/Chums/AllChums';
import MyChums from '../../pages/Chums/MyChums';

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
    return (
      <TopTab.Navigator>
        <TopTab.Screen name="AllChums" component={AllChums} />
        <TopTab.Screen name="MyChums" component={MyChums} />
      </TopTab.Navigator>
    );
    
}

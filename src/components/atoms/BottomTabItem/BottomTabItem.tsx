import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './BottomTabItem.styles';
import { noop } from '@/utils/helpers';
import { IC_add_circle, IC_bell, IC_home, IC_user, IC_users } from '@/assets';
import Colors from '@/utils/Colors';
import Gap from '../Gap';


interface BottomTabItemProps {
  title?: string;
  active?: boolean;
  onPress?: () => void;
  onLongPress?: () => void;
}

const BottomTabItem: React.FC<BottomTabItemProps> = ({
  title = '',
  active = false,
  onPress = noop,
  onLongPress = noop,
}) => {
  const renderIcon = () => {
    switch (title) {
      case 'Home':
        return active ? <IC_home color={Colors.blue} /> : <IC_home color={Colors.white} />;
      case 'Topics':
        return active ? <IC_users color={Colors.blue} /> : <IC_users color={Colors.white} />;
      case 'Posts':
        return active ? <IC_add_circle color={Colors.blue} /> : <IC_add_circle color={Colors.white} />;
      case 'Notifications':
        return active ? <IC_bell color={Colors.blue} /> : <IC_bell color={Colors.white} />;
      case 'Account':
        return active ? <IC_user color={Colors.blue} /> : <IC_user color={Colors.white} />;
      default:
        return active ? <IC_home color={Colors.blue} /> : <IC_home color={Colors.white} />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      {renderIcon()}
      <Gap height={6} />
    </TouchableOpacity>
  );
};

export default memo(BottomTabItem);
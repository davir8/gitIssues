import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
    paddingVertical: metrics.basePadding,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },

  input: {
    flex: 1,
    height: 44,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    borderWidth: 0.5,
    borderColor: colors.light,
  },

  button: {
    padding: metrics.basePadding / 2,
  },

  icon: {
    color: colors.darker,
  },
});

export default styles;

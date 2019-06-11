import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components';


export const Container = styled(Animated.ScrollView)`
	margin: 0 30px;
`;

export const Code = styled.View`
	overflow: hidden;
	background: #fff;
	padding: 10px;
	border-radius: 2px;
	align-self: center;
`;

export const Nav = styled.View`
	margin-top: 30px;
	align-self: stretch;
	border-top-width: ${StyleSheet.hairlineWidth}px;
	border-top-color: rgba(255,255,255,.8);
`;

export const NavItem = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	border-bottom-width: ${StyleSheet.hairlineWidth}px;
	border-bottom-color: rgba(255,255,255,.8);
`;

export const NavText = styled.Text`
	flex: 1;
	color: #fff;
	font-size: 15px;
	margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
	border-width: ${StyleSheet.hairlineWidth}px;
	border-color: rgba(255,255,255,.8);
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	padding: 16px;
	margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
	color: #fff;
	font-size: 13px;
	font-weight: bold;
`;

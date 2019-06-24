import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';
import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './styles';

const Menu = ({ translateY }) => (
  <Container style={{
    opacity: translateY.interpolate({
      inputRange: [0, 400],
      outputRange: [0, 1],
    }),
  }}
  >
    <Code>
      <QRCode value="https://rocketseat.com.br" size={80} fgColor="#fff" bgColor="#8b10a3" />
    </Code>

    <Nav>
      <NavItem>
        <Icon name="help-outline" size={20} color="#fff" />
        <NavText>Me Ajuda</NavText>
        <Icon name="keyboard-arrow-right" size={20} color="#fff" />
      </NavItem>
      <NavItem>
        <Icon name="person-outline" size={20} color="#fff" />
        <NavText>Perfil</NavText>
        <Icon name="keyboard-arrow-right" size={20} color="#fff" />
      </NavItem>
      <NavItem>
        <Icon name="credit-card" size={20} color="#fff" />
        <NavText>Configurar Cartão</NavText>
        <Icon name="keyboard-arrow-right" size={20} color="#fff" />
      </NavItem>
      <NavItem>
        <Icon name="smartphone" size={20} color="#fff" />
        <NavText>Configurações do App</NavText>
        <Icon name="keyboard-arrow-right" size={20} color="#fff" />
      </NavItem>
    </Nav>

    <SignOutButton onPress={() => {}}>
      <SignOutButtonText>Sair do App</SignOutButtonText>
    </SignOutButton>
  </Container>
);

export default Menu;

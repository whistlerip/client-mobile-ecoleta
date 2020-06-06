import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {
    View, Image, Text, ImageBackground,
    KeyboardAvoidingView, Platform, TextInput
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Home = () => {
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');

    const navigation = useNavigation();

    function handleNavigateToPoint() {
        navigation.navigate('Points', {
            uf,
            city
        });
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ImageBackground
                source={require('../../assets/home-background.png')}
                style={styles.container}
                imageStyle={{ width: 274, height: 368 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resídous</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        maxLength={2}
                        value={uf}
                        onChangeText={setUf}
                        autoCapitalize="characters"
                        autoCorrect={false}
                        placeholder="Digite a UF"
                    />
                    <TextInput
                        style={styles.input}
                        autoCapitalize="words"
                        value={city}
                        onChangeText={setCity}
                        placeholder="Digite a Cidade"
                    />

                    <RectButton style={styles.button} onPress={handleNavigateToPoint}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#fff" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default Home;
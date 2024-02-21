import React from 'react'
import { View, Text, Image, StyleSheet, picture, name, bio, course } from 'react-native'

const ProfileCard = ({ listaAlunos }) => {
    return (
        <View>
            {listaAlunos.map((aluno, index) => {
                return (
                    <View key={index}>
                        <Image source={picture} style={styles.image} />
                        <Text>{name}</Text>
                        <Text>{course}</Text>
                        <Text>{bio}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});

export default ProfileCard

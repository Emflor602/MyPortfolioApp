import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CardProps {
    title: string;
    school: string;
    credits: number;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, school, credits, description, link }) => {
        const backgroundColor = useThemeColor({}, 'background');
        const color = useThemeColor({}, 'text');
        const shadowColor = useThemeColor({}, 'shadowColor');

    return (
        <View style={[
                { backgroundColor, shadowColor, borderColor: shadowColor },
                styles.card,
        ]}>
        <Text style={[styles.title, { color }]}>{title}</Text>
        <Text style={[styles.school, { color }]}>{school}</Text>
        <Text style={[styles.credits, { color }]}>credits: {credits.toFixed(1)}</Text>
        <Text style={[styles.description, { color }]}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Link pressed: ${link}')}>
                <Text style={styles.link}>See Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2},
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 18,
        marginBottom: 8,
    },
    school: {
        fontSize: 14,
        marginBottom: 4,
    },
    credits: {
        fontSize: 14,
        marginBottom: 8,
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        fontSize: 14,
        color: '#1e90ff',
        textDecorationLine: 'underline',
    }
});

export default Card;
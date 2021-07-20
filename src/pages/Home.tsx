import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}


export default function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('')

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ));

    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGretting('Good morning');

        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting('Good afternoon');
        } else {
            setGretting('Good nigth');
        }
    }, [])


    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Welcome, Douglas</Text>
            <Text style={Styles.greeTings}>
                {gretting}
            </Text>
            <TextInput
                style={Styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />
            <Button
                onPress={handleAddNewSkill}
                title="Add"
            />

            <Text style={[
                Styles.title, { marginVertical: 50 }]}>
                My skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#fff',
        fontSize: 15,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greeTings: {
        color: '#fff'
    }
});


import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'


interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}
export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={Styles.buttonSkill}
            {...rest}>
            <Text style={
                Styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1e25',
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20
    },
    textSkill: {
        color: '#fff',
        padding: 20,
        fontSize: 22,
        fontWeight: 'bold',

    }
});
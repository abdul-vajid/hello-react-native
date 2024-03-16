import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Home = () => {
    const todos = [
        {
            task: "Clean my room",
            status: "Pending",
            time: new Date('2024-03-16T12:00:00')
        },
        {
            task: "Go to gym and work hard",
            status: "Pending",
            time: new Date('2024-03-16T08:00:00')
        },
        {
            task: "Call mom",
            status: "complete",
            time: new Date('2024-03-14T09:30:00')
        },
        {
            task: "Read Book: Atomic habits",
            status: "Pending",
            time: new Date('2024-03-18T12:00:00')
        },
        {
            task: "Buy new cloths",
            status: "Pending",
            time: new Date('2024-03-19T11:00:00')
        },
        {
            task: "Clean my room",
            status: "Pending",
            time: new Date('2024-03-20T02:30:00')
        },
    ]
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    {todos.map((todo) => {
                        return (
                            <View>
                                <Text style={styles.item}>{todo.task}</Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    }
});

export default Home
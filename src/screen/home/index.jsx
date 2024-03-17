import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Task from '@/componets/Task';
import FloatingButton from '@/componets/FloatingButton';

const Home = () => {
    const todos = [
        {
            task: "Clean my room",
            status: "Pending",
        },
        {
            task: "Go to gym and work hard",
            status: "Pending",
        },
        {
            task: "Call mom",
            status: "completed",
        },
        {
            task: "Read Book: Atomic habits",
            status: "Pending",
        },
        {
            task: "Buy new cloths",
            status: "Pending",
        },
        {
            task: "Clean my room",
            status: "completed",
        },
    ]
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.innerView}>
                    {todos.map((todo) => {
                        return (
                            <Task key={todo.time} status={todo.status} title={todo.task}></Task>
                        );
                    })}
                </View>
            </ScrollView>
            <FloatingButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerView: {
        marginTop: 10
    }
});

export default Home
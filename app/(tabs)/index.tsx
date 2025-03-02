import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [currentTask, setCurrentTask] = useState<string | null>(null);

  const addTask = () => {
    if (task.trim().length > 0) {
      setCurrentTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0D0D0D',  // 코발트 블루 계열
    justifyContent: 'center',      // 수직 중앙 정렬
    alignItems: 'center',          // 수평 중앙 정렬
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',  // 흰색으로 변경하여 가독성 확보
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#A8C6DA',  // 밝은 블루 계열
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',  // 입력창 배경색 흰색
  },
  addButton: {
    backgroundColor: '#34785E',  // 그린 계열
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A8C6DA',  // 밝은 블루 계열
    fontSize: 16,
    color: '#ffffff',  // 텍스트 색상 흰색으로 변경
  },
});
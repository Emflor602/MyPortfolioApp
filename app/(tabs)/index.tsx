import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import portfolio from '../../data/portfolio.json';

export default function HomeScreen() {
  const portfolioData = portfolio
  return (
    <ScrollView style={styles.container}>
      <ThemedText type="subtitle">Welcome to My Portfolio</ThemedText>
      <ThemedView style={styles.container}>
        <FlatList
          data={portfolio}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Card 
              {...item}
            />
          )}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

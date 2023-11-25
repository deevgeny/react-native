# List Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [List traditional JavaScript approach](#list-traditional-javascript-approach)
* [Flat list](#flat-list)
* [Item separator](#item-separator)
* [List empty](#list-empty)
* [List header and footer](#list-header-and-footer)
* [Section list](#section-list)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest Styling --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## List traditional JavaScript approach
* Traditional approach with JavaScript `list.map()`.
* Not recommended in React Native.

JavaScript approach example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/List/App.js)<br>
```javascript
// App.js
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemonList.map((pokemon) => {
          console.log(pokemon.id);
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={styles.cardText}>{pokemon.type}</Text>
              <Text style={styles.cardText}>{pokemon.name}</Text>
            </View>
          );
        })}
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  }
});
```

## Flat list
* FlatList - recommended to use in React Native.
* FlatList - component renders only the items currently in view, making it
highly performant for long lists.

FlatList example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/List/App.js)<br>
```javascript
// App.js
...
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollView}>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.type}</Text>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          // Gets item.key or item.id by default or use callback function
          keyExtractor={(item) => item.id.toString()}
          // horizontal={true}
        />
      </View>
    </SafeAreaView>
...
```

## Item separator
* ItemSeparatorComponent - renders separator for each list item except top
and bottom.

Item separator example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/List/App.js)<br>
```javascript
// App.js
...
  <FlatList
    ...
    ItemSeparatorComponent={<View style={{ height: 16, }} />}
    />
...
```

## List empty
* ListEmptyComponent - renders component when list is empty.

List empty example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/List/App.js)<br>
```javascript
// App.js
...
  <FlatList
    ...
    ListEmptyComponent={<Text>No Items Found</Text>}
    />
...
```

## List header and footer
* ListHeaderComponent - allows to add a custom header to list.
* ListFooterComponent - allows to add a custom footer to list.

List header and footer example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/List/App.js)<br>
```javascript
// App.js
...
  <FlatList
    ...
    ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
    ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
    />
...
```

## Section list
* SectionList - is a performant component to render sectioned lists.

Section list example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/List/App.js)<br>
```javascript
// App.js
...
      <View style={styles.scrollView}>
        <SectionList
          sections={groupedPokemonList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
            );
          }}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
          SectionSeparatorComponent={() => (
            <View
              style={{
                height: 16,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
...
```

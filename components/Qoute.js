import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('Loading...');
  const [author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const apiKey = '7d210062e86b2b8deebdab67cce80d8f'; // Replace with your actual API key

  const fetchRandomQuote = () => {
    setIsLoading(true);
    axios.get('https://favqs.com/api/qotd', {
      headers: {
        'Authorization': `Token token="${apiKey}"`,
      }
    })
      .then(response => {
        const result = response.data.quote;
        setQuote(result.body);
        setAuthor(result.author);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching a new quote:', error);
        setIsLoading(false);
      });
  };

  const addToFavorites = () => {
    if (!favoriteQuotes.includes(quote)) {
      setFavoriteQuotes([...favoriteQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5372F0' }}>
      <StatusBar barStyle="light-content" />

      <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
        <Text style={{
          textAlign: 'center',
          fontSize: 26,
          fontWeight: '600',
          color: '#333',
          marginBottom: 20,
        }}>Quote of the Day</Text>
        <FontAwesome5 name="quote-left" style={{ fontSize: 20, marginBottom: -12 }} />
        <Text style={{
          color: '#000',
          fontSize: 16,
          lineHeight: 26,
          letterSpacing: 1.1,
          fontWeight: '400',
          textAlign: 'center',
          marginBottom: 10,
          paddingHorizontal: 30,
        }}>
          {quote}
        </Text>
        <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right', marginTop: -20, marginBottom: 20 }} />
        <Text style={{
          textAlign: 'right',
          fontWeight: '300',
          fontStyle: 'italic',
          fontSize: 16,
          color: '#000',
        }}>_{author}</Text>
        <TouchableOpacity
          onPress={fetchRandomQuote}
          style={{
            backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
            {isLoading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={addToFavorites}
          style={{
            backgroundColor: 'rgba(83, 114, 240, 1)',
            padding: 20,
            borderRadius: 30,
          }}>
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Add to Favorites</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => { }}
            style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
            <FontAwesome5 name="volume-up" size={22} color='#5372F0' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}
            style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
            <FontAwesome5 name="copy" size={22} color='#5372F0' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}
            style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
            <FontAwesome5 name="twitter" size={22} color='#5372F0' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Quote;

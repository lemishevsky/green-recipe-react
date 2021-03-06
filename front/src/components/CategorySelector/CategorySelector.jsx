import React from 'react';
import { Select, Box, Text } from 'grommet';

const categories = [
  'Любая категория',
  'Холодная закуска',
  'Горячая закуска',
  'Суп',
  'Горячее блюдо',
  'Салат',
  'Каша',
  'Паста',
  'Десерт'
];

export default function CategorySelector({ recipesCategory, recipesFromApi }) {
  const [value, setValue] = React.useState('');
  return (
    <Box direction="row" width='midle' margin="xsmall">
      <Text margin='xsmall' alignSelf='center'> Выберите категорию: </Text>
      <Select
        value={value}
        placeholder="Выберите категорию"
        options={categories}
        onChange={({ option }) => {
          setValue(option);
          if (option === 'Любая категория') {
            recipesFromApi()
          } else recipesCategory(option)
        }}
      />
    </Box>
  );
}

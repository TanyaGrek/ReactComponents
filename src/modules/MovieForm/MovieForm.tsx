import React, { FC } from 'react';
import { Row } from 'assets/styles';
import { Input } from '../../components/Input/Input';
import { FormAddMovie } from './MovieForm.styles';
import { SortDDLSelect } from '../../components/SortDDL/SortDDL.styles';
import { Textarea } from '../../components/Textarea/Textarea';
import { Button } from '../../components/Button/Button';
import { IMovie } from '../../interfaces/IMovie';

type MovieFormProps = {
  movie?: IMovie;
}
export const MovieForm: FC<MovieFormProps> = ({ movie }: MovieFormProps) => {
  return (
    <>
      <FormAddMovie>
        <Row justifyContent='space-between' alignItems='center' gap='30px'>
          <Input placeholder={'Name'} label='Title' type='text' size={5}/>
          <Input placeholder={'Select Date'} label='RELEASE DATE' type='date' size={2}/>
        </Row>
        <Row justifyContent='space-between' alignItems='center' gap='30px'>
          <Input placeholder={'https://'} label='movie url' type='text' size={5}/>
          <Input placeholder={'7.8'} label='RATING' type='text' size={2}/>
        </Row>
        <Row justifyContent='space-between' alignItems='center' gap='30px'>
          <SortDDLSelect>
            <option>release date</option>
            <option>rating</option>
          </SortDDLSelect>
          <Input placeholder={'minutes'} label='RUNTIME' type='text' size={2}/>
        </Row>
        <Row justifyContent='space-between' alignItems='center' gap='30px'>
          <Textarea label='OVERVIEW'/>
        </Row>
      </FormAddMovie>
      <Row justifyContent='flex-end'>
        <Button type='empty' title='reset' size='s' onClick={() => console.log('reset')} />
        <Button type='full' title='submit' size='s' onClick={() => console.log('submit')} />
      </Row>
    </>
  )
};

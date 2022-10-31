export { generateId } from './generate-id';
export { Injectable } from '@nestjs/common';

export type Uncreated<T> = Omit<T, 'id' | 'publicId'>;

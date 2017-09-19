import { EditorConfiguration } from '../src/editor-config';
import { ecoreSchema } from './schema';
import {
  attributeView,
  datatypeView,
  eClassView,
  enumView,
  ePackageView,
  eReferenceView
} from './uischema';

export const labelProvider = {
  '#annotation': 'source',
  '#datatype': 'name',
  '#enum': 'name',
  '#enumliteral': 'name',
  '#package': 'name',
  '#parameter': 'name',
  '#reference': 'name',
  '#typeparameter': 'name',
  '#class': 'name',
  '#attribute': 'name',
  '#operation': 'name',
  '#task': 'name',
  '#user': 'name'
};

export const imageProvider = {
  '#datatype': 'datatype',
  '#enum': 'enum',
  '#enumliteral': 'enumliteral',
  '#package': 'package',
  '#parameter': 'parameter',
  '#reference': 'reference',
  '#typeparameter': 'typeparameter',
  '#class': 'class',
  '#attribute': 'attribute',
  '#operation': 'operation',
  '#annotation': 'annotation'
};

export const modelMapping = {
  'attribute': 'eClass',
  'mapping': {
    'http://www.eclipse.org/emf/2002/Ecore#//EEnum': '#enum',
    'http://www.eclipse.org/emf/2002/Ecore#//EClass': '#class',
    'http://www.eclipse.org/emf/2002/Ecore#//EDataType': '#datatype',
    'http://www.eclipse.org/emf/2002/Ecore#//EReference': '#reference',
    'http://www.eclipse.org/emf/2002/Ecore#//EAttribute': '#attribute'
  }
};

export const editorConfig: EditorConfiguration = {
  dataSchema: ecoreSchema,
  imageMapping: imageProvider,
  labelMapping: labelProvider,
  modelMapping: modelMapping,
  detailSchemata: {
    '#attribute': attributeView,
    '#class': eClassView,
    '#datatype': datatypeView,
    '#enum': enumView,
    '#package': ePackageView,
    '#reference': eReferenceView,
  }
}

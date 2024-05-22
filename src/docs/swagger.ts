
// this is only for alternative as a yaml file due to vercel build issue
export const swaggerDoc = {
  openapi: '3.0.0',
  info: {
    title: 'Employee API',
    description: 'API for managing employees',
    version: '1.0.0'
  },
  servers: [
    {
      url: '/api/v1/employees', // Set the base path here
      description: 'Base URL for all endpoints',
    },
  ],
  paths: {
    '/': {
      get: {
        summary: 'Get all employees',
        responses: {
          '200': {
            description: 'A list of employees',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Employee'
                  }
                }
              }
            }
          }
        }
      },
      post: {
        summary: 'Create a new employee',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Employee'
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Employee created successfully'
          }
        }
      }
    },
    '/{employeeId}': {
      get: {
        summary: 'Get an employee by ID',
        parameters: [
          {
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'The ID of the employee to retrieve'
          }
        ],
        responses: {
          '200': {
            description: 'An employee object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Employee'
                }
              }
            }
          }
        }
      },
      put: {
        summary: 'Update an employee by ID',
        parameters: [
          {
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'The ID of the employee to update'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Employee'
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Employee updated successfully'
          }
        }
      },
      delete: {
        summary: 'Delete an employee by ID',
        parameters: [
          {
            in: 'path',
            name: 'employeeId',
            required: true,
            schema: {
              type: 'string'
            },
            description: 'The ID of the employee to delete'
          }
        ],
        responses: {
          '200': {
            description: 'Employee deleted successfully'
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Employee: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '123'
          },
          firstName: {
            type: 'string',
            example: 'John'
          },
          lastName: {
            type: 'string',
            example: 'Doe'
          },
          email: {
            type: 'string',
            example: 'john.doe@example.com'
          },
          phoneNumber: {
            type: 'string',
            example: '123-456-7890'
          },
          gender: {
            type: 'string',
            enum: ['Male', 'Female', 'Other'],
            example: 'Male'
          },
          photo: {
            type: 'string',
            example: 'http://example.com/photos/john.jpg'
          }
        }
      }
    }
  }
}
const rows = [
  {
    ids: ['tag', ],
    description: [
      {
        ids: ['tag/', 'name', ],
        description: ['tag_name', ],
      },
      {
        ids: ['tag/', 'comment', ],
        description: ['tag_name', ],
      },
    ],
  },
  {
    ids: ['global_quantities', ],
    description: [
      {
        ids: ['global_quantities/', 'ip', ],
        description: [
          {
            ids: ['global_quantities/', 'ip/', 'value(:)', ],
            description: ['ip', ],
          },
          {
            ids: ['global_quantities/', 'ip/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'current_non_inductive', ],
        description: [
          {
            ids: ['global_quantities/', 'current_non_inductive/', 'value(:)', ],
            description: ['current_non_inductive', ],
          },
          {
            ids: ['global_quantities/', 'current_non_inductive/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'current_bootstrap', ],
        description: [
          {
            ids: ['global_quantities/', 'current_bootstrap/', 'value(:)', ],
            description: ['current_bootstrap', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'current_ohm', ],
        description: [
          {
            ids: ['global_quantities/', 'current_ohm/', 'value(:)', ],
            description: ['current_ohm', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'v_loop', ],
        description: [
          {
            ids: ['global_quantities/', 'v_loop/', 'value(:)', ],
            description: ['v_loop', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'beta_tor', ],
        description: [
          {
            ids: ['global_quantities/', 'beta_tor/', 'value(:)', ],
            description: ['beta_tor', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'beta_tor_norm', ],
        description: [
          {
            ids: ['global_quantities/', 'beta_tor_norm/', 'value(:)', ],
            description: ['beta_tor_norm', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'beta_pol', ],
        description: [
          {
            ids: ['global_quantities/', 'beta_pol/', 'value(:)', ],
            description: ['beta_pol', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'energy_diamagnetic', ],
        description: [
          {
            ids: ['global_quantities/', 'energy_diamagnetic/', 'value(:)', ],
            description: ['energy_diamagnetic', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'energy_total', ],
        description: [
          {
            ids: ['global_quantities/', 'energy_total/', 'value(:)', ],
            description: ['energy_total', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'energy_thermal', ],
        description: [
          {
            ids: ['global_quantities/', 'energy_thermal/', 'value(:)', ],
            description: ['energy_thermal', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'h_mode', ],
        description: [
          {
            ids: ['global_quantities/', 'h_mode/', 'value(:)', ],
            description: ['h_mode', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'r0', ],
        description: [
          {
            ids: ['global_quantities/', 'r0/', 'value(:)', ],
            description: ['r0', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'b0', ],
        description: [
          {
            ids: ['global_quantities/', 'b0/', 'value(:)', ],
            description: ['b0', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'h_98', ],
        description: [
          {
            ids: ['global_quantities/', 'h_98/', 'value(:)', ],
            description: ['h_98', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'tau_energy', ],
        description: [
          {
            ids: ['global_quantities/', 'tau_energy/', 'value(:)', ],
            description: ['tau_energy', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'q_95', ],
        description: [
          {
            ids: ['global_quantities/', 'q_95/', 'value(:)', ],
            description: ['q_95', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['global_quantities/', 'power_loss', ],
        description: [
          {
            ids: ['global_quantities/', 'power_loss/', 'value(:)', ],
            description: ['power_loss', ],
          },
          {
            ids: ['global_quantities/', '/', '', ],
            description: ['', ],
          },
        ],
      },
    ],
  },
  {
    ids: ['local', ],
    description: [
      {
        ids: ['local/', 'separatrix', ],
        description: [
          {
            ids: ['local/', 'separatrix/', 't_e', ],
            description: [
              {
                ids: ['local/', 'separatrix/', 't_e/', 'value(:)', ],
                description: ['separatrix_t_e', ],
              },
              {
                ids: ['local/', 'separatrix/', 't_e/', '', ],
                description: ['', ],
              },
            ],
          },
          {
            ids: ['local/', 'separatrix/', 'n_e', ],
            description: [
              {
                ids: ['local/', 'separatrix/', 'n_e/', 'value(:)', ],
                description: ['separatrix_n_e', ],
              },
              {
                ids: ['local/', 'separatrix/', '/', '', ],
                description: ['', ],
              },
            ],
          },
          {
            ids: ['local/', 'separatrix/', 'n_i', ],
            description: [
              {
                ids: ['local/', 'separatrix/', 'n_i/', 'deuterium', ],
                description: [
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', 'deuterium/', 'value(:)', ],
                    description: ['separatrix_n_i_deuterium', ],
                  },
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', 'deuterium/', '', ],
                    description: ['', ],
                  },
                ],
              },
              {
                ids: ['local/', 'separatrix/', 'n_i/', 'tritium', ],
                description: [
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', 'tritium/', 'value(:)', ],
                    description: ['separatrix_n_i_tritium', ],
                  },
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', '/', '', ],
                    description: ['', ],
                  },
                ],
              },
              {
                ids: ['local/', 'separatrix/', 'n_i/', 'helium_4', ],
                description: [
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', 'helium_4/', 'value(:)', ],
                    description: ['separatrix_n_i_helium_4', ],
                  },
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', '/', '', ],
                    description: ['', ],
                  },
                ],
              },
              {
                ids: ['local/', 'separatrix/', 'n_i/', 'beryllium', ],
                description: [
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', 'beryllium/', 'value(:)', ],
                    description: ['separatrix_n_i_beryllium', ],
                  },
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', '/', '', ],
                    description: ['', ],
                  },
                ],
              },
              {
                ids: ['local/', 'separatrix/', 'n_i/', 'neon', ],
                description: [
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', 'neon/', 'value(:)', ],
                    description: ['separatrix_n_i_neon', ],
                  },
                  {
                    ids: ['local/', 'separatrix/', 'n_i/', '/', '', ],
                    description: ['', ],
                  },
                ],
              },
            ],
          },
          {
            ids: ['local/', 'separatrix/', 'zeff', ],
            description: [
              {
                ids: ['local/', 'separatrix/', 'zeff/', 'value(:)', ],
                description: ['separatrix_zeff', ],
              },
              {
                ids: ['local/', 'separatrix/', 'zeff/', '', ],
                description: ['', ],
              },
            ],
          },
        ],
      },
      {
        ids: ['local/', '', ],
        description: ['', ],
      },
    ],
  },
  {
    ids: ['time(:)', ],
    description: ['time', ],
  },
]

export default rows

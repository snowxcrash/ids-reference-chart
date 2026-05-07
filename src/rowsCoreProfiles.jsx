const rows = [
  {
    ids: ['profiles_1d(itime)', ],
    description: [
      {
        ids: ['profiles_1d(itime)/', 'grid', ],
        description: [
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'rho_tor_norm(:)', ],
            description: ['rho_tor_norm(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'rho_tor(:)', ],
            description: ['rho_tor(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'rho_pol_norm(:)', ],
            description: ['rho_pol_norm(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'psi(:)', ],
            description: ['psi(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'volume(:)', ],
            description: ['volume(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'area(:)', ],
            description: ['area(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'surface(:)', ],
            description: ['surface(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'psi_magnetic_axis', ],
            description: ['psi_magnetic_axis', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'psi_boundary', ],
            description: ['psi_boundary', ],
          },
        ],
      },
      {
        ids: ['profiles_1d(itime)/', 'electrons', ],
        description: [
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'temperature(:)', ],
            description: ['e_temperature(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'density(:)', ],
            description: ['e_density(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'density_thermal(:)', ],
            description: ['e_density_thermal(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'density_fast(:)', ],
            description: ['e_density_fast(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'pressure(:)', ],
            description: ['e_pressure(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'pressure_thermal(:)', ],
            description: ['e_pressure_thermal(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'pressure_fast_perpendicular(:)', ],
            description: ['e_pressure_fast_perpendicular(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'pressure_fast_parallel(:)', ],
            description: ['e_pressure_fast_parallel(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'electrons/', 'collisionality_norm(:)', ],
            description: ['e_collisionality_norm(FLT_1D)', ],
          },
        ],
      },
      {
        ids: ['profiles_1d(itime)/', 'ion(i1)', ],
        description: [
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'element(i2)', ],
            description: [
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'element(i2)/', 'a', ],
                description: ['i_element_a', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'element(i2)/', 'z_n', ],
                description: ['i_element_z_n', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'element(i2)/', 'atoms_n', ],
                description: ['i_element_atoms_n', ],
              },
            ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'z_ion', ],
            description: ['i_z_ion', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'name', ],
            description: ['i_name', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'neutral_index', ],
            description: ['i_neutral_index', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'z_ion_1d(:)', ],
            description: ['i_z_ion_1d(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'z_ion_square_1d(:)', ],
            description: ['i_z_ion_square_1d(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'temperature(:)', ],
            description: ['i_temperature(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'density(:)', ],
            description: ['i_density(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'density_thermal(:)', ],
            description: ['i_density_thermal(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'density_fast(:)', ],
            description: ['i_density_fast(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'pressure(:)', ],
            description: ['i_pressure(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'pressure_thermal(:)', ],
            description: ['i_pressure_thermal(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'pressure_fast_perpendicular(:)', ],
            description: ['i_pressure_fast_perpendicular(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'pressure_fast_parallel(:)', ],
            description: ['i_pressure_fast_parallel(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'multiple_states_flag', ],
            description: ['i_multiple_states_flag', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)', ],
            description: [
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'z_min', ],
                description: ['i_state_z_min', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'z_max', ],
                description: ['i_state_z_max', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'z_average', ],
                description: ['i_state_z_average', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'z_average_1d(:)', ],
                description: ['i_state_z_average_1d(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'z_average_square_1d(:)', ],
                description: ['i_state_z_average_square_1d(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'ionization_potential', ],
                description: ['i_state_ionization_potential', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'name', ],
                description: ['i_state_name', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'electron_configuration', ],
                description: ['i_state_electron_configuration', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'vibrational_level', ],
                description: ['i_state_vibrational_level', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'vibrational_mode', ],
                description: ['i_state_vibrational_mode', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'temperature(:)', ],
                description: ['i_state_temperature(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'density(:)', ],
                description: ['i_state_density(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'density_thermal(:)', ],
                description: ['i_state_density_thermal(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'density_fast(:)', ],
                description: ['i_state_density_fast(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'pressure(:)', ],
                description: ['i_state_pressure(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'pressure_thermal(:)', ],
                description: ['i_state_pressure_thermal(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'pressure_fast_perpendicular(:)', ],
                description: ['i_state_pressure_fast_perpendicular(FLT_1D)', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'ion(i1)/', 'state(i2)/', 'pressure_fast_parallel(:)', ],
                description: ['i_state_pressure_fast_parallel(FLT_1D)', ],
              },
            ],
          },
        ],
      },
      {
        ids: ['profiles_1d(itime)/', 'neutral(i1)', ],
        description: [
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'element(i2)', ],
            description: [
              {
                ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'element(i2)/', 'a', ],
                description: ['n_element_a', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'element(i2)/', 'z_n', ],
                description: ['n_element_z_n', ],
              },
              {
                ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'element(i2)/', 'atoms_n', ],
                description: ['n_element_atoms_n', ],
              },
            ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'name', ],
            description: ['n_name', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'ion_index', ],
            description: ['n_ion_index', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'temperature(:)', ],
            description: ['n_temperature(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'density(:)', ],
            description: ['n_density(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'density_thermal(:)', ],
            description: ['n_density_thermal(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'density_fast(:)', ],
            description: ['n_density_fast(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'pressure(:)', ],
            description: ['n_pressure(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'pressure_thermal(:)', ],
            description: ['n_pressure_thermal(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'pressure_fast_perpendicular(:)', ],
            description: ['n_pressure_fast_perpendicular(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'pressure_fast_parallel(:)', ],
            description: ['n_pressure_fast_parallel(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'neutral(i1)/', 'multiple_states_flag', ],
            description: ['n_multiple_states_flag', ],
          },
        ],
      },
      {
        ids: ['profiles_1d(itime)/', 't_i_average(:)', ],
        description: ['t_i_average(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'n_i_total_over_n_e(:)', ],
        description: ['n_i_total_over_n_e(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'n_i_thermal_total(:)', ],
        description: ['n_i_thermal_total(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'zeff(:)', ],
        description: ['zeff(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'pressure_ion_total(:)', ],
        description: ['pressure_ion_total(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'pressure_thermal(:)', ],
        description: ['pressure_thermal(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'pressure_perpendicular(:)', ],
        description: ['pressure_perpendicular(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'pressure_parallel(:)', ],
        description: ['pressure_parallel(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'j_total(:)', ],
        description: ['j_total(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'j_ohmic(:)', ],
        description: ['j_ohmic(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'j_non_inductive(:)', ],
        description: ['j_non_inductive(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'j_bootstrap(:)', ],
        description: ['j_bootstrap(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'conductivity_parallel(:)', ],
        description: ['conductivity_parallel(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'e_field', ],
        description: [
          {
            ids: ['profiles_1d(itime)/', 'e_field/', 'parallel(:)', ],
            description: ['e_field_parallel(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'e_field/', '', ],
            description: ['', ],
          },
        ],
      },
      {
        ids: ['profiles_1d(itime)/', 'q(:)', ],
        description: ['q(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'magnetic_shear(:)', ],
        description: ['magnetic_shear(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'time', ],
        description: ['time', ],
      },
    ],
  },
  {
    ids: ['global_quantities', ],
    description: [
      {
        ids: ['global_quantities/', 'ip(:)', ],
        description: ['ip', ],
      },
      {
        ids: ['global_quantities/', 'current_non_inductive(:)', ],
        description: ['current_non_inductive', ],
      },
      {
        ids: ['global_quantities/', 'current_bootstrap(:)', ],
        description: ['current_bootstrap', ],
      },
      {
        ids: ['global_quantities/', 'v_loop(:)', ],
        description: ['v_loop', ],
      },
      {
        ids: ['global_quantities/', 'li_3(:)', ],
        description: ['li_3', ],
      },
      {
        ids: ['global_quantities/', 'beta_tor(:)', ],
        description: ['beta_tor', ],
      },
      {
        ids: ['global_quantities/', 'beta_tor_norm(:)', ],
        description: ['beta_tor_norm', ],
      },
      {
        ids: ['global_quantities/', 'beta_pol(:)', ],
        description: ['beta_pol', ],
      },
      {
        ids: ['global_quantities/', 'energy_diamagnetic(:)', ],
        description: ['energy_diamagnetic', ],
      },
      {
        ids: ['global_quantities/', 'z_eff_resistive(:)', ],
        description: ['z_eff_resistive', ],
      },
      {
        ids: ['global_quantities/', 't_e_peaking(:)', ],
        description: ['t_e_peaking', ],
      },
      {
        ids: ['global_quantities/', 't_i_average_peaking(:)', ],
        description: ['t_i_average_peaking', ],
      },
      {
        ids: ['global_quantities/', 'resistive_psi_losses', ],
        description: ['resistive_psi_losses', ],
      },
      {
        ids: ['global_quantities/', 'ejima', ],
        description: ['ejima', ],
      },
    ],
  },
  {
    ids: ['vacuum_toroidal_field', ],
    description: [
      {
        ids: ['vacuum_toroidal_field/', 'r0', ],
        description: ['r0', ],
      },
      {
        ids: ['vacuum_toroidal_field/', 'b0(:)', ],
        description: ['b0', ],
      },
    ],
  },
  {
    ids: ['time(:)', ],
    description: ['time', ],
  },
]

export default rows
